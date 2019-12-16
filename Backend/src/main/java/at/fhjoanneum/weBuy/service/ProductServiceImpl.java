package at.fhjoanneum.weBuy.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import at.fhjoanneum.weBuy.model.Product;
import at.fhjoanneum.weBuy.repository.ProductRepository;

@Service
@Transactional
public class ProductServiceImpl implements ProductService {

    private ProductRepository productRepository;

    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public Iterable<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public Iterable<Product> getMyProducts(long id) {
        List<Product> products= productRepository.findBySupplierId(id);
        products.addAll(productRepository.findByCustomerId(id));
        return products;
    }

    @Override
    public Product getProduct(long id) {
        return productRepository
          .findById(id)
          .orElseThrow(); //() -> new ResourceNotFoundException("Product not found"));
    }

    @Override
    public List<Product> findByStatus(String status)
    {
        return productRepository.findByStatus(status);
    }

    @Override
    public Product save(Product product) {
        return productRepository.save(product);
    }

    @Override
    public void delete(Long id)
    {
        productRepository.deleteById(id);
    }
}