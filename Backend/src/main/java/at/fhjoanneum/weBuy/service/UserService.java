
package at.fhjoanneum.weBuy.service;

import at.fhjoanneum.weBuy.model.User;
import at.fhjoanneum.weBuy.validation.UserExistsException;

public interface UserService   {
    User save(User user) throws UserExistsException;
 Boolean usernameExists(String username);
}