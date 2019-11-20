package at.fhjoanneum.weBuy.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import at.fhjoanneum.weBuy.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}