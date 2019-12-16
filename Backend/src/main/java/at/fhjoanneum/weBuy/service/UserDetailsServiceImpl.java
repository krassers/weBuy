package at.fhjoanneum.weBuy.service;

import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import at.fhjoanneum.weBuy.repository.UserRepository;

@Service("userDetailsService") // It has to be annotated with @Service.
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private BCryptPasswordEncoder encoder;

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        try {
            at.fhjoanneum.weBuy.model.User user = userRepository.findByUsername(username);
            if (user.getUsername().equals(username)) {

                // Remember that Spring needs roles to be in this format: "ROLE_" + userRole
                // (i.e. "ROLE_ADMIN")
                // So, we need to set it to that format, so we can verify and compare roles
                // (i.e. hasRole("ADMIN")).
                List<GrantedAuthority> grantedAuthorities = AuthorityUtils
                        .commaSeparatedStringToAuthorityList(user.getRole().equals("admin") ? "ROLE_ADMIN" : "ROLE_USER");

                // The "User" class is provided by Spring and represents a model class for user
                // to be returned by UserDetailsService
                // And used by auth manager to verify and check user authentication.
                return new User(user.getUsername(), user.getPassword(), grantedAuthorities);
            }
        } catch (Exception e) {
        }
        // If user not found. Throw this exception.
        throw new UsernameNotFoundException("Username: " + username + " not found");
    }

    @PostConstruct()
    @Transactional
    public void initUsers() {
        if (userRepository.count() == 0) {
            at.fhjoanneum.weBuy.model.User admin = new at.fhjoanneum.weBuy.model.User();
            admin.setUsername("admin");
            admin.setPassword(encoder.encode("12345"));
            admin.setRole("admin");
            userRepository.save(admin);

        }

    }

}