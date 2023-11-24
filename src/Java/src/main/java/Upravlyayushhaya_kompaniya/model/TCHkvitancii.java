package Upravlyayushhaya_kompaniya.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Upravlyayushhaya_kompaniya.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ТЧквитанции
 */
@Entity(name = "IISUpravlyayushhaya_kompaniyaТЧквитанции")
@Table(schema = "public", name = "ТЧквитанции")
public class TCHkvitancii {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Услуга")
    private String услуга;

    @Column(name = "ОбъемКУ")
    private Integer объемку;

    @Column(name = "ИтогоКОплЗаРП")
    private Integer итогокоплзарп;

    @Column(name = "IDтарифа")
    private Integer idтарифа;

    @Column(name = "РазмПлатЗаКУ")
    private Integer размплатзаку;

    @Column(name = "ВсегоНачисЗаРП")
    private Integer всегоначисзарп;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "KommuUslugi")
    @Convert("KommuUslugi")
    @Column(name = "КоммуУслуги", length = 16, unique = true, nullable = false)
    private UUID _kommuuslugiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "KommuUslugi", insertable = false, updatable = false)
    private KommuUslugi kommuuslugi;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Kvitanciya")
    @Convert("Kvitanciya")
    @Column(name = "Квитанция", length = 16, unique = true, nullable = false)
    private UUID _kvitanciyaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Kvitanciya", insertable = false, updatable = false)
    private Kvitanciya kvitanciya;


    public TCHkvitancii() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getУслуга() {
      return услуга;
    }

    public void setУслуга(String услуга) {
      this.услуга = услуга;
    }

    public Integer getОбъемКУ() {
      return объемку;
    }

    public void setОбъемКУ(Integer объемку) {
      this.объемку = объемку;
    }

    public Integer getИтогоКОплЗаРП() {
      return итогокоплзарп;
    }

    public void setИтогоКОплЗаРП(Integer итогокоплзарп) {
      this.итогокоплзарп = итогокоплзарп;
    }

    public Integer getIDтарифа() {
      return idтарифа;
    }

    public void setIDтарифа(Integer idтарифа) {
      this.idтарифа = idтарифа;
    }

    public Integer getРазмПлатЗаКУ() {
      return размплатзаку;
    }

    public void setРазмПлатЗаКУ(Integer размплатзаку) {
      this.размплатзаку = размплатзаку;
    }

    public Integer getВсегоНачисЗаРП() {
      return всегоначисзарп;
    }

    public void setВсегоНачисЗаРП(Integer всегоначисзарп) {
      this.всегоначисзарп = всегоначисзарп;
    }


}