package com.lucas.chamados.controller;

import com.lucas.chamados.dto.LoginRequest;
import com.lucas.chamados.dto.LoginResponse;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class LoginController {

    // Usuário fixo para teste
    private static final String EMAIL_FIXO = "admin@chamados.com";
    private static final String SENHA_FIXA = "123456";

    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest request) {
        if (EMAIL_FIXO.equals(request.getEmail()) && SENHA_FIXA.equals(request.getSenha())) {
            return new LoginResponse(true, "Login realizado com sucesso!", "token-fake-123");
        } else {
            return new LoginResponse(false, "Email ou senha inválidos!", null);
        }
    }
}