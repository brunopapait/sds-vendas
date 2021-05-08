package com.devsuperior.dsvendas.dto;

import java.io.Serializable;

import com.devsuperior.dsvendas.entities.Seller;

public class SalesSumDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private String salerName;
	private Double sum;

	public SalesSumDTO() {

	}

	public SalesSumDTO(Seller seller, Double sum) {
		super();
		this.salerName = seller.getName();
		this.sum = sum;
	}

	public String getSalerName() {
		return salerName;
	}

	public void setSalerName(String salerName) {
		this.salerName = salerName;
	}

	public Double getSum() {
		return sum;
	}

	public void setSum(Double sum) {
		this.sum = sum;
	}

}
