package at.fhjoanneum.weBuy.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull(message = "Product name is required.")
    @Basic(optional = false)
    private String name;

    private String description;

    private String category;

    private Double purchase_price;

    private Double selling_price;

    private String status;

    private String pictureUrl;

    @ManyToOne
    @JoinColumn(name = "supplier_id")
    private User supplier;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    private User customer;

    public Product(Long id, @NotNull(message = "Product name is required.") String name, String description,
            String category, Double purchase_price, Double selling_price, String status, String pictureUrl) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.category = category;
        this.purchase_price = purchase_price;
        this.selling_price = selling_price;
        this.status = status;
        this.pictureUrl = pictureUrl;
    }

    public Product() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    /**
     * @return the purchase_price
     */
    public Double getPurchase_price() {
        return purchase_price;
    }

    /**
     * @param purchase_price the purchase_price to set
     */
    public void setPurchase_price(Double purchase_price) {
        this.purchase_price = purchase_price;
    }

    /**
     * @return the category
     */
    public String getCategory() {
        return category;
    }

    /**
     * @param category the category to set
     */
    public void setCategory(String category) {
        this.category = category;
    }

    /**
     * @return the description
     */
    public String getDescription() {
        return description;
    }

    /**
     * @param description the description to set
     */
    public void setDescription(String description) {
        this.description = description;
    }

    /**
     * @return the selling_price
     */
    public Double getSelling_price() {
        return selling_price;
    }

    /**
     * @param selling_price the selling_price to set
     */
    public void setSelling_price(Double selling_price) {
        this.selling_price = selling_price;
    }

    /**
     * @return the status
     */
    public String getStatus() {
        return status;
    }

    /**
     * @param status the status to set
     */
    public void setStatus(String status) {
        this.status = status;
    }

    public String getPictureUrl() {
        return pictureUrl;
    }

    public void setPictureUrl(String pictureUrl) {
        this.pictureUrl = pictureUrl;
    }
}
