
package at.fhjoanneum.weBuy.service;

import at.fhjoanneum.weBuy.model.User;

public interface UserService {
    User save(User user);

    User findByUsername(String username);
}