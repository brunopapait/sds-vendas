package com.devsuperior.dsvendas.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsvendas.dto.SaleDTO;
import com.devsuperior.dsvendas.dto.SalesSumDTO;
import com.devsuperior.dsvendas.dto.SalesSuccessDTO;
import com.devsuperior.dsvendas.services.SaleService;

@RestController
@RequestMapping(value = "/sales")
public class SaleController {

	@Autowired
	private SaleService saleService;

	@GetMapping
	public ResponseEntity<Page<SaleDTO>> findAll(Pageable pageable) {
		Page<SaleDTO> result = saleService.findAll(pageable);

		return ResponseEntity.ok(result);
	}

	@GetMapping(value = "/amount-by-seller")
	public ResponseEntity<List<SalesSumDTO>> amountGroupedBySeller() {

		List<SalesSumDTO> result = saleService.amountGroupedBySeller();

		return ResponseEntity.ok(result);
	}

	@GetMapping(value = "/success-by-seller")
	public ResponseEntity<List<SalesSuccessDTO>> successGroupedBySeller() {

		List<SalesSuccessDTO> result = saleService.successGroupedBySeller();

		return ResponseEntity.ok(result);
	}

}
