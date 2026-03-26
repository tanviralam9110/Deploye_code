FROM maven:3.9.6-eclipse-temurin-17-alpine

# Set working directory
WORKDIR /app

# Copy ONLY backend content properly
COPY backend /app

# Move into project directory
WORKDIR /app

# Build project
RUN mvn clean package -DskipTests

# Expose port
EXPOSE 8080

# Run jar
CMD ["sh", "-c", "java -jar target/*.jar"]
