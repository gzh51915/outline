import React, { Component, PureComponent } from 'react'


class Goods extends Component {

    componentDidMount() {
        const { id } = this.props.match.params
        // ajax()
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