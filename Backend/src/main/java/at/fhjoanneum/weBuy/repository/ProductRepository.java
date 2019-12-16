package at.fhjoanneum.weBuy.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import at.fhjoanneum.weBuy.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByStatus(String status);

}