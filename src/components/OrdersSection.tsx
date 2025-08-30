import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ShoppingBag, Package, Truck, CheckCircle, Clock, Eye } from 'lucide-react'
import { mockOrders, Order } from '@/data/mockData'

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'pending': return <Clock className="h-4 w-4" />
    case 'processing': return <Package className="h-4 w-4" />
    case 'shipped': return <Truck className="h-4 w-4" />
    case 'delivered': return <CheckCircle className="h-4 w-4" />
    default: return <Clock className="h-4 w-4" />
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'pending': return 'secondary'
    case 'processing': return 'default'
    case 'shipped': return 'default'
    case 'delivered': return 'default'
    case 'cancelled': return 'destructive'
    default: return 'secondary'
  }
}

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

export const OrdersSection = () => {
  const [orders] = useState<Order[]>(mockOrders)

  if (orders.length === 0) {
    return (
      <div className="text-center py-12">
        <ShoppingBag className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
        <h3 className="text-lg font-medium text-muted-foreground">No orders yet</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Start exploring our beautiful heritage crafts
        </p>
        <Button className="bg-gradient-saffron hover:shadow-cultural transition-all duration-300">
          <a href="/shop">Browse Products</a>
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {orders.map((order) => (
        <Card key={order.id} className="shadow-warm">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-lg">Order #{order.orderNumber}</CardTitle>
                <p className="text-sm text-muted-foreground mt-1">
                  Placed on {formatDate(order.date)}
                </p>
              </div>
              <div className="text-right">
                <Badge variant={getStatusColor(order.status)} className="mb-2">
                  <span className="flex items-center gap-1">
                    {getStatusIcon(order.status)}
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
                </Badge>
                <p className="text-lg font-semibold">₹{order.total.toLocaleString()}</p>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-4">
            {order.items.map((item, index) => (
              <div key={`${order.id}-${item.productId}`}>
                <div className="flex items-center space-x-4">
                  <img 
                    src={item.productImage} 
                    alt={item.productName}
                    className="h-16 w-16 rounded-lg object-cover bg-muted"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium">{item.productName}</h4>
                    <p className="text-sm text-muted-foreground">by {item.artisan}</p>
                    <p className="text-sm">Qty: {item.quantity} × ₹{item.price.toLocaleString()}</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    View
                  </Button>
                </div>
                {index < order.items.length - 1 && <Separator className="mt-4" />}
              </div>
            ))}
            
            <Separator />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h5 className="font-medium mb-2">Shipping Address</h5>
                <p className="text-muted-foreground">
                  {order.shippingAddress.name}<br />
                  {order.shippingAddress.address}<br />
                  {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.pincode}
                </p>
              </div>
              
              {(order.trackingNumber || order.estimatedDelivery) && (
                <div>
                  <h5 className="font-medium mb-2">Tracking Information</h5>
                  {order.trackingNumber && (
                    <p className="text-muted-foreground mb-1">
                      Tracking: <span className="font-mono">{order.trackingNumber}</span>
                    </p>
                  )}
                  {order.estimatedDelivery && (
                    <p className="text-muted-foreground">
                      Est. Delivery: {formatDate(order.estimatedDelivery)}
                    </p>
                  )}
                </div>
              )}
            </div>
            
            <div className="flex justify-between items-center pt-2">
              <Button variant="outline" size="sm">
                Order Details
              </Button>
              {order.status === 'delivered' && (
                <Button variant="outline" size="sm">
                  Leave Review
                </Button>
              )}
              {order.trackingNumber && (
                <Button variant="outline" size="sm">
                  Track Package
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}