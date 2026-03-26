FROM maven:3.9.6-eclipse-temurin-17-alpine

WORKDIR /app

# Copy entire repo
COPY . .

# Move into backend folder (IMPORTANT FIX)
WORKDIR /app/backend

# Build project
RUN mvn clean package -DskipTests

EXPOSE 8080

CMD ["sh", "-c", "java -jar target/*.jar"]
