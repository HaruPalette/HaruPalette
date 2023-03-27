package com.ssafy.palette.service;

import java.io.IOException;
import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.amazonaws.AmazonServiceException;
import com.amazonaws.SdkClientException;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.ssafy.palette.domain.entity.File;
import com.ssafy.palette.repository.DiaryRepository;
import com.ssafy.palette.repository.FileRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@RequiredArgsConstructor
public class S3Service {
    @Value("${cloud.aws.s3.bucket}")
    private String bucket;

    private final String imgLink = "https://haru-palette.s3.ap-northeast-2.amazonaws.com/diary/";
    private final String path = "diary/";
    private final AmazonS3 amazonS3;

    private final FileRepository fileRepository;
    private final DiaryRepository diaryRepository;
    public String uploadImg(Long diaryId, MultipartFile multipartFile, LocalDate date) throws IOException {
        String fileName = multipartFile.getOriginalFilename();
        StringBuilder sb = new StringBuilder();
        sb.append("-");
        sb.append(diaryId);
        String imgSet = "";

        //파일 형식 구하기
        String ext = fileName.split("\\.")[1];
        String contentType = "";

        // content type을 지정해서 올려주지 않으면 자동으로 "application/octet-stream"으로 고정이 되서 링크 클릭시 웹에서 열리는게 아니라 자동 다운이 시작됨.
        switch (ext) {
            case "jpg":
                contentType = "image/jpeg";
                break;
            case "png":
                contentType = "image/png";
                break;
            case "txt":
                contentType = "text/plain";
                break;
            case "csv":
                contentType = "text/csv";
                break;
        }

        try {
            ObjectMetadata metadata = new ObjectMetadata();
            metadata.setContentType(contentType);

            // 이미지 추가
            // Set File name here
            amazonS3.putObject(new PutObjectRequest(bucket, "diary/" + date + sb.toString(), multipartFile.getInputStream(), metadata)
                    .withCannedAcl(CannedAccessControlList.PublicRead));

            imgSet = imgLink + date + sb.toString();
            File file = File.builder()
                .path(imgSet)
                .diary(diaryRepository.findById(diaryId).get())
                .build();
            fileRepository.save(file);

        } catch (AmazonServiceException e) {
            e.printStackTrace();
        } catch (SdkClientException e) {
            e.printStackTrace();
        }

        //object 정보 가져오기
/*        ListObjectsV2Result listObjectsV2Result = amazonS3.listObjectsV2(bucket);
        List<S3ObjectSummary> objectSummaries = listObjectsV2Result.getObjectSummaries();

        for (S3ObjectSummary object : objectSummaries) {
            log.info("object = " + object.toString());
        }*/
        return imgSet;
    }

}
