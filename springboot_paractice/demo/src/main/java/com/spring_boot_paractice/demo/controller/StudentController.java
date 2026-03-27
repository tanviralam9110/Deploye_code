package com.spring_boot_paractice.demo.controller;

import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin(origins = "https://deploye-code.vercel.app")
public class StudentController {

    @GetMapping("/")
    public String home() {
        return "Backend is running!";
    }

    @PostMapping("/submit")
    public Map<String, String> handleRequest(@RequestBody Map<String, String> request) {
        String issue = request.get("issue");
        String response = generateResponse(issue);
        Map<String, String> result = new HashMap<>();
        result.put("message", response);
        return result;
    }

    private String generateResponse(String issue) {
        if (issue == null || issue.isEmpty()) {
            return "Please describe your symptoms.";
        }
        issue = issue.toLowerCase();
        if (issue.contains("fever")) {
            return "You reported fever. Please stay hydrated and monitor your temperature.";
        } else if (issue.contains("headache")) {
            return "You reported headache. Try to rest and avoid screen time.";
        } else if (issue.contains("cough")) {
            return "You reported cough. Drink warm fluids and consult doctor if it persists.";
        } else {
            return "Thanks for your input. Please consult a healthcare professional for proper guidance.";
        }
    }
}
