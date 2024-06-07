const express = require('express');
const shopController = require('../controllers/shop');
const isAuthenticated = require('../middleware/isAuthenticated');

const shopRouter = express.Router();

shopRouter.get('/', shopController.getHomepage);
shopRouter.get('/about', shopController.getAbout);
shopRouter.get('/contact', shopController.getContact);
shopRouter.get('/products', shopController.getProducts);
shopRouter.get('/mypage', isAuthenticated, shopController.getMyPage);
shopRouter.get('/products/:productId', shopController.getProduct);
shopRouter.get('/cart', isAuthenticated, shopController.getCart);
shopRouter.post('/cart', isAuthenticated, shopController.postCart);
shopRouter.post('/cart-delete-item', isAuthenticated, shopController.postCartDeleteProduct);
shopRouter.get('/checkout', isAuthenticated, shopController.getCheckout);
shopRouter.get('/checkout/success', shopController.getCheckoutSuccess);
shopRouter.get('/checkout/cancel', shopController.getCheckout);
shopRouter.get('/orders', isAuthenticated, shopController.getOrders);
shopRouter.get('/shipment', isAuthenticated, shopController.getShipment);
shopRouter.post('/shipment', isAuthenticated, shopController.postShipment);
shopRouter.get('/tools', shopController.getTools);  // Ajout de la route
shopRouter.get('/routine', shopController.getRoutine);  // Ajout de la route
shopRouter.get('/tubeform', shopController.getTubeForm);  // Ajout de la route


module.exports = shopRouter;
