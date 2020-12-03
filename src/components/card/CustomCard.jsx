import React from 'react'

import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'

const CustomCard = ({ children, className }) => {
    return <Card className={className}>{children}</Card>
}

export default CustomCard
