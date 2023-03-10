## **Getting Started**

1. Clone the repository to your local machine using Git.
2. Open a terminal and navigate to the project directory.
3. Run **`gradle clean install`** to build the project.
4. Run `**java jar**` to start the server.
5. The server will now be running at **`http://localhost:8080`**.

## **Database Access**

This backend server includes support for connecting to a database and performing CRUD operations. It uses Hibernate as the Object-Relational Mapping (ORM) tool, and supports a range of databases including MySQL.

To configure the database connection, update the **`application.properties`** file in the **`src/main/resources`** directory with your database details.

## **Security**

This backend server includes support for authentication and authorization, allowing you to secure your application. It uses Spring Security to handle authentication and authorization, and supports a range of authentication mechanisms including Basic Authentication, OAuth2, and JSON Web Tokens (JWT).

To configure the security settings, update the **`WebSecurityConfig.java`** file in the **`src/main/java`** directory.

## **Contributing**

If you would like to contribute to this backend server, please follow these steps:

1. Fork the repository on GitHub.
2. Make your changes and commit them to your fork.
3. Submit a pull request to the main repository.

We welcome contributions of all kinds, from bug fixes to new features. Please make sure to follow the project's coding standards and guidelines.

# Tree🌳

```
├── README.md
└── palette
    └── src
        ├── main
        │   ├── java
        │   │   └── com
        │   │       └── ssafy
        │   │           └── palette
        │   │               ├── PaletteApplication.java
        │   │               ├── config
        │   │               ├── controller
        │   │               ├── domain
        │   │               │   ├── dto
        │   │               │   └── entity
        │   │               ├── exception
        │   │               ├── repository
        │   │               └── service
        │   └── resources
        │       └── application.yml
        └── test
            └── java
                └── com
                    └── ssafy
                        └── palette
                            └── PaletteApplicationTests.java
```