
package at.fhjoanneum.weBuy.controller;

import java.security.Principal;
import java.util.Base64;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import at.fhjoanneum.weBuy.model.User;
import at.fhjoanneum.weBuy.service.UserService;
import at.fhjoanneum.weBuy.validation.UserExistsException;

@RestController
// @RequestMapping("/api")
public class UserController {
    @Autowired
    private UserService userService;

    // @Autowired
    // private SecurityService securityService;

    // @Autowired
    // private UserValidator userValidator;

    @GetMapping("/registration")
    public String registration(Model model) {
        model.addAttribute("userForm", new User());

        return "registration";
    }

    @PostMapping("/registration")
    public User registration(@RequestBody @Valid User user) {
        User registered = null;
        try {
            registered = userService.save(user);
        } catch (UserExistsException ex) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "User already exists", ex);
        }

        // securityService.autoLogin(userForm.getUsername(),
        // userForm.getPasswordConfirm());

        return registered;
    }

    @GetMapping("/user/{username}")
    public Long getUserId(@PathVariable String username) {
        return userService.getUserId(username);
    }

    @RequestMapping("/user")
    public Principal user(HttpServletRequest request) {
        String authToken = request.getHeader("Authorization").substring("Basic".length()).trim();
        return () -> new String(Base64.getDecoder().decode(authToken)).split(":")[0];
    }
}