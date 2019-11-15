
package at.fhjoanneum.weBuy.controller;

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

    @GetMapping("/login")
    public String login(Model model, String error, String logout) {
        if (error != null)
            model.addAttribute("error", "Your username and password is invalid.");

        if (logout != null)
            model.addAttribute("message", "You have been logged out successfully.");

        return "login";
    }

    @GetMapping({ "/", "/welcome" })
    public String welcome(Model model) {
        return "welcome";
    }
}