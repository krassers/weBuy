package at.fhjoanneum.weBuy.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import at.fhjoanneum.weBuy.model.User;

@RepositoryRestResource()
public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}