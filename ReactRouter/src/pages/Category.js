import React, { Component, PureComponent } from 'react'
import {Switch,Route,Redirect} from 'react-router-dom';

const Phone = ()=><div>Phone</div>
const Computer = ()=><div>Computer</div>
const Acc = ()=><div>Acc</div>
const Pad = ()=><div>Pad</div>

class Category extends Component {
    state = {
        routes:[{
            path:'/phone',
            component:Phone
        },{
            path:'/computer',
            component:Computer
        },{
            path:'/acc',
            component:Acc
        },{
            path:'/pad',
            component:Pad
        }]
    }
    render() {
        console.log('cate=', this.props)
        const {path} = this.props.match
        const {routes} = this.state;
        return (
            <div>
                Category
            <Switch>
                {/* <Route path="/category/phone" component={Phone} />
                <Route path="/category/computer" component={Computer} />
                <Route path="/category/acc" component={Acc} />
                <Route path="/category/pad" component={Pad} /> */}
                {
                    routes.map(item=><Route key={item.path} path={path + item.path} component={item.component}/>)
                }
                <Redirect from={path} to={path + routes[0].path} exact/>
            </Switch>
            </div>
        )
    }
}

export default Category;