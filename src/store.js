import Vue from "vue";

export const store = Vue.observable({
    filter: "ALL"
});

export const mutations = {
    setFilter(filter) {
        store.filter = filter;
    }
};