
package at.fhjoanneum.weBuy.controller;

import java.security.Principal;
import java.util.Base64;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import at.fhjoanneum.weBuy.model.User;
import at.fhjoanneum.weBuy.service.UserService;

@RestController
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
    public String registration(@RequestBody @Valid User user) {
        userService.save(user);

        // securityService.autoLogin(userForm.getUsername(),
        // userForm.getPasswordConfirm());

        return "redirect:/login";
    }

    @RequestMapping("/user")
    public Principal user(HttpServletRequest request) {
        String authToken = request.getHeader("Authorization").substring("Basic".length()).trim();
        return () -> new String(Base64.getDecoder().decode(authToken)).split(":")[0];
    }
}