package Upravlyayushhaya_kompaniya.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Upravlyayushhaya_kompaniya.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: КоммуУслуги
 */
@Entity(name = "IISUpravlyayushhaya_kompaniyaКоммуУслуги")
@Table(schema = "public", name = "КоммуУслуги")
public class KommuUslugi {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "IDтарифа")
    private Integer idтарифа;

    @Column(name = "Наименование")
    private String наименование;

    @Column(name = "Стоимость")
    private Integer стоимость;


    public KommuUslugi() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getIDтарифа() {
      return idтарифа;
    }

    public void setIDтарифа(Integer idтарифа) {
      this.idтарифа = idтарифа;
    }

    public String getНаименование() {
      return наименование;
    }

    public void setНаименование(String наименование) {
      this.наименование = наименование;
    }

    public Integer getСтоимость() {
      return стоимость;
    }

    public void setСтоимость(Integer стоимость) {
      this.стоимость = стоимость;
    }


}