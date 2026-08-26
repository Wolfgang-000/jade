
Component({properties:{product:{type:Object,value:{}}},methods:{onBuy(){this.triggerEvent('buy',{product:this.properties.product})}}})
