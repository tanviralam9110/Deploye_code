FROM maven:3.9.6-eclipse-temurin-17-alpine

# Set working directory
WORKDIR /app

# Copy backend project files
COPY . /app

# Move into correct directory (important fix)
WORKDIR /app

# Build project
RUN mvn clean package -DskipTests

# Expose port
EXPOSE 8080

# Run app
CMD ["sh", "-c", "java -jar target/*.jar"]
