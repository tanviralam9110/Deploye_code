FROM maven:3.9.6-eclipse-temurin-17-alpine

WORKDIR /app

# Copy full repo
COPY . .

# Move to correct project folder
WORKDIR /app/springboot_paractice/demo

# Build project
RUN mvn clean package -DskipTests

EXPOSE 8080

CMD ["java", "-jar", "target/demo-0.0.1-SNAPSHOT.jar"]
