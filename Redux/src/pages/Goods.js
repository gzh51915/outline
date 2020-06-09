import React, { Component, PureComponent } from 'react'
import http from '../utils/http'

class Goods extends Component {

    async componentDidMount() {
        const { id } = this.props.match.params
        // ajax()
        const {data} = await http.get('/goods/'+id);

        console.log('data=',data)
    }
    render() {
        console.log('goods=', this.props)
        return (
            <div>
                Goods
            </div>
        )
    }
}

export default Goods;