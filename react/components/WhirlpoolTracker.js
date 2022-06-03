import React,{Component} from 'react'
import axios from 'axios'
import { Layout,PageBlock,Button,PageHeader  } from 'vtex.styleguide'
export default class WhirlpoolTracker extends React.Component {
  
  state = {lastOrder:[]};

  componentDidMount = () =>{
    
  }
  getDataHandler = () =>{
    var data = JSON.stringify({
      "external_reference": "1128030207051-01_CIF"
    });

    console.log("fetch");
    var config = {
      method: 'get',
      //url: 'https://s88hx8maul.execute-api.us-east-1.amazonaws.com/default/Customers_ConsultarPedido',
      url:"https://store--whirlpoolmxlab.myvtex.com/_v/whirlpool_tracker/track/1128030207051-01",
      headers: {
        Accept: "application/vnd.vtex.ds.v10+json",
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
      },
      data : data
    };

    axios(config)
    .then(function (response) {
      this.setState({lastOrder:response.data.data.producto});
    })
    .catch(function (error) {
      console.log(error);
    });

  }
  
  render() {
    return (
      <div style={{backgroundColor:"white"}}>
        <Layout pageHeader={<PageHeader title="Mis pedidos" />} style={{backgroundColor:"white"}}>
          <PageBlock>
            <Button onClick={() => this.getDataHandler()}>GET DATA</Button>
            
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada ut neque id pharetra. Suspendisse tortor eros, sagittis at molestie at, semper mollis urna. Sed porta ipsum ac vulputate ultrices. Mauris sed libero quis risus rutrum efficitur in nec justo.</p>

          </PageBlock>
          <PageBlock>
            <h4>Last Order status</h4>
            <div>{this.state.lastOrder.map((product=>(
              <p>{product.material}</p>
            )))}</div>
          </PageBlock>
        </Layout>
      </div>
    )
  }
}
