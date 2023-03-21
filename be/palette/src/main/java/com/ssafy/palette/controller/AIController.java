//package com.ssafy.palette.controller;
//
//import com.googlecode.protobuf.format.JsonFormat;
//import com.ssafy.palette.PaletteAIGrpc;
//import com.ssafy.palette.PaletteProto.*;
//import io.grpc.ManagedChannel;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//public class AIController {
//
//    private final PaletteAIGrpc.PaletteAIBlockingStub paletteAIStub;
//
//    AIController(ManagedChannel managedChannel) {
//        paletteAIStub = PaletteAIGrpc.newBlockingStub(managedChannel);
//    }
//
//    @GetMapping(value="/stt", produces = "application/json; charset=utf8")
//    public String speechToText() {
//        return "speech";
//    }
//
//    @GetMapping(value="/emotion", produces = "application/json; charset=utf8")
//    public String textToEmotion(@RequestBody String text) {
//        TextRequest request = TextRequest.newBuilder().setText(text).build();
//        EmotionResponse response = paletteAIStub.textToEmotion(request);
//        return new JsonFormat().printToString(response);
//    }
//
//}
