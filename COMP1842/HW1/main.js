var eventBus = new Vue(); // Event bus for inter-component communication

// Product component
Vue.component('product', {
    props: {
        vip: {
            type: Boolean,
            required: true
        }
    },
    template: `
        <div class="product">
            <div class="product-info">
                <h1>GPU Name:</h1>
                <h2>{{ brand }} {{ product }}</h2>
            </div>
            <div class="product-image">
                <img :src="image" width="400" height="400">
            </div>
            <p v-if="inStock" class="in-stock">Product Available</p>
            <p v-else class="out-of-stock">Product Unavailable</p>
            <p>User is VIP: {{ vip }}</p>
            <p>Shipping: {{ shipping }}</p>
            <ul>
                <li v-for="detail in details" :key="detail">{{ detail }}</li>
            </ul>
            <button @click="addToCart" :disabled="!inStock" :class="{disabledButton: !inStock}">Add to Cart</button>
            <div v-for="(variant, index) in variants" :key="variant.variantId" class="color-box" :style="{backgroundColor: variant.variantColor}" @mouseover="updateProduct(index)">
                <p>{{ variant.variantOrigin }}</p>
            </div>
            <div class="buttons">
                <button @click="changeImage1">View to ROG GPU as default</button>
                <button @click="changeImage2">View to EVGA GPU as default</button>
            </div>
            <product-tabs :reviews="reviews"></product-tabs>
        </div>
    `,
    data() {
        return {
            brand: "NVIDIA",
            product: "RTX 3070Ti",
            selectedVariant: 0,
            details: ['2020 Most Valuable GPU', 'Excellent Air Vent', 'Low Risk of Bottlenecking', 'Optimal CPU Pairing'],
            variants: [
                { variantId: 666, variantOrigin: "ROG", variantImage: "./img/RTX3070TiROGStrix.jpg", variantColor: "red", variantQuantity: 4 },
                { variantId: 667, variantOrigin: "EVGA", variantImage: "./img/RTX3070TiEVGA.jpg", variantColor: "skyblue", variantQuantity: 16 }
            ],
            reviews: []
        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId); // Emit event
        },
        updateProduct(index) {
            this.selectedVariant = index; // Update selected variant
        },
        changeImage1() {
            this.selectedVariant = 0; // Set to ROG image
        },
        changeImage2() {
            this.selectedVariant = 1; // Set to EVGA image
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product; // Product title
        },
        image() {
            return this.variants[this.selectedVariant].variantImage; // Image based on selected variant
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity > 0; // Stock status
        },
        shipping() {
            return this.vip ? "Free" : 4.00; // Shipping cost based on VIP status
        }
    },
    mounted() {
        eventBus.$on('review-submitted', productReview => {
            this.reviews.push(productReview); // Add review on event
        });
    }
});

// Product review component
Vue.component('product-review', {
    template: `
        <form class="review-form" @submit.prevent="onSubmit">
            <div v-if="errors.length">
                <p>This demands a certain correction in the shown error(s):</p>
                <ul>
                    <li v-for="error in errors">{{ error }}</li>
                </ul>
            </div>
            <p>
                <label for="name">Name:</label>
                <input id="name" v-model="name">
            </p>
            <p>
                <label for="review">Review:</label>
                <textarea id="review" v-model="review" rows="16"></textarea>
            </p>
            <p>
                <label for="rating">Rating:</label>
                <select id="rating" v-model.number="rating">
                    <option>5</option>
                    <option>4</option>
                    <option>3</option>
                    <option>2</option>
                    <option>1</option>
                </select>
            </p>
            <p>
                <input type="submit" value="Submit">
            </p>
        </form>
    `,
    data() {
        return {
            name: null,
            review: null,
            rating: null,
            errors: []
        }
    },
    methods: {
        onSubmit() {
            this.errors = [];
            if (this.name && this.review && this.rating) {
                let productReview = { name: this.name, review: this.review, rating: this.rating };
                eventBus.$emit('review-submitted', productReview); // Emit event
                this.name = this.review = this.rating = null; // Reset form
            } else {
                if (!this.name) this.errors.push("Name needed!");
                if (!this.review) this.errors.push("Review needed!");
                if (!this.rating) this.errors.push("Rating needed!");
            }
        }
    }
});

// Product tabs component
Vue.component('product-tabs', {
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
    template: `
        <div>
            <span class="tab" :class="{ activeTab: selectedTab === tab }" v-for="(tab, index) in tabs" :key="index" @click="selectedTab = tab">{{ tab }}</span>
            <div v-show="selectedTab === 'Reviews'">
                <h2>Reviews</h2>
                <p v-if="!reviews.length">There are no reviews yet.</p>
                <ul v-else>
                    <li v-for="review in reviews">
                        <p>{{ review.name }}</p>
                        <p>{{ review.review }}</p>
                        <p>Rating: {{ review.rating }}</p>
                    </li>
                </ul>
            </div>
            <product-review v-show="selectedTab === 'Make a Review'"></product-review>
        </div>
    `,
    data() {
        return {
            tabs: ['Reviews', 'Make a Review'], // Tabs array
            selectedTab: 'Reviews' // Default selected tab
        }
    }
});

// Main Vue instance
var app = new Vue({
    el: "#app",
    data: {
        vip: true, // VIP status
        cart: [] // Cart array
    },
    methods: {
        updateCart(id) {
            this.cart.push(id); // Add item to cart
        }
    }
});
