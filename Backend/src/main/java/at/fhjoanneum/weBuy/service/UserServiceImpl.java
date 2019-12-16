
package at.fhjoanneum.weBuy.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import at.fhjoanneum.weBuy.model.User;
import at.fhjoanneum.weBuy.repository.UserRepository;
import at.fhjoanneum.weBuy.validation.UserExistsException;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    public User save(User user) throws UserExistsException  {
        if (usernameExists(user.getUsername())) {
            throw new UserExistsException("User already exists");
        }

        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        user.setRole(user.getRole());
        return userRepository.save(user);

    }
    @Override
    public Boolean usernameExists(String username) {
        User existingUser = this.userRepository.findByUsername(username);
        if (existingUser == null) {
            return false;
        } else {
            return true;
        }
    }

    @Override
    public Long getUserId(String username) throws ResourceNotFoundException {
        User user = userRepository.findByUsername(username);
        if(user == null) {
             throw new ResourceNotFoundException("Username not found");
        }
        return user.getId();
    }
}