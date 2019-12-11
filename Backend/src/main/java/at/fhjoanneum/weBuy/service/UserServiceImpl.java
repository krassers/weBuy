
package at.fhjoanneum.weBuy.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import at.fhjoanneum.weBuy.model.User;
import at.fhjoanneum.weBuy.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    public User save(User user) {
        
            user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
            user.setRole(user.getRole());
            return userRepository.save(user);
            // return user;

    }

    @Override
    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }
}