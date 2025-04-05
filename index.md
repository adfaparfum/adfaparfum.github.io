---
layout: default
title: Adfa Parfum
description: Premium Fragrance Collection
---

<section class="hero" style="background-image: url('/images/background_adfa.webp')">
  <div class="container">
    <h1>Discover Your Signature Scent</h1>
    <p>Luxury fragrances crafted with passion</p>
  </div>
</section>

<section id="products" class="product-showcase">
  <div class="container">
    <h2>Our Collections</h2>
    <div class="grid">
      {% for product in site.products %}
        <div class="product-card">
          <img src="{{ product.image }}" alt="{{ product.title }}">
          <div class="product-info">
            <h3>{{ product.title }}</h3>
            <p>{{ product.description }}</p>
          </div>
        </div>
      {% endfor %}
    </div>
  </div>
</section>
