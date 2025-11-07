package com.vocare.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.vocare.model.Usuario;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*") // permite o front (HTML) acessar o backend
public class LoginController {

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Usuario usuario) {
        if (usuario.getNome() == null || usuario.getEmail() == null ||
            usuario.getNome().isEmpty() || usuario.getEmail().isEmpty()) {
            return ResponseEntity.badRequest().body("Nome e e-mail são obrigatórios.");
        }

        // Aqui você pode salvar o usuário no banco, se quiser
        System.out.println("Login recebido: " + usuario.getNome() + " - " + usuario.getEmail());

        return ResponseEntity.ok(usuario);
    }
}
