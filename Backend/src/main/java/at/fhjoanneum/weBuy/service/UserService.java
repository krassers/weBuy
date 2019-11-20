
package at.fhjoanneum.weBuy.service;

import at.fhjoanneum.weBuy.model.User;

public interface UserService {
    void save(User user);

    User findByUsername(String username);
}