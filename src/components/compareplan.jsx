function Compareplans() {
    return (
      <div class="container">

          <h2 className="display-6 text-center mb-4">Compare plans</h2>
  
          <div className="table-responsive">
            <table className="table text-center">
              <thead>
                <tr>
                  <th style={{ width: '34%' }}></th>
                  <th style={{ width: '22%' }}>Free</th>
                  <th style={{ width: '22%' }}>Pro</th>
                  <th style={{ width: '22%' }}>Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="text-start">Public</th>
                  <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"/></svg></td>
                  <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"/></svg></td>
                  <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"/></svg></td>
                </tr>
                <tr>
                  <th scope="row" className="text-start">Private</th>
                  <td></td>
                  <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"/></svg></td>
                  <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"/></svg></td>
                </tr>
              </tbody>
  
              <tbody>
                <tr>
                  <th scope="row" className="text-start">Permissions</th>
                  <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"/></svg></td>
                  <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"/></svg></td>
                  <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"/></svg></td>
                </tr>
                <tr>
                  <th scope="row" className="text-start">Sharing</th>
                  <td></td>
                  <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"/></svg></td>
                  <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"/></svg></td>
                </tr>
                <tr>
                  <th scope="row" className="text-start">Unlimited members</th>
                  <td></td>
                  <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"/></svg></td>
                  <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"/></svg></td>
                </tr>
                <tr>
                  <th scope="row" className="text-start">Extra security</th>
                  <td className="text-muted"><svg className="bi" width="24" height="24"><use xlinkHref="#check"/></svg></td>
                  <td className="text-muted"></td>
                  <td className="text-muted"><svg className="bi" width="24" height="24"><use xlinkHref="#check"/></svg></td>
                </tr>
              </tbody>
            </table>
          </div>
  
        
      </div>
    );
  }
  
  export default Compareplans;
  