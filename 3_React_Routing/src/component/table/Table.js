import React, { Component } from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// const useStyles = makeStyles({
//     table: {
//       minWidth: 650,
//     },
//   });

export default class CityTable extends Component{
    render () {
        const { rows, columns } = this.props
       console.log(rows)
        return(
            <div>
                <Table>
                  <TableHead>
                  <TableRow>
                    {columns.map((column, index)=>{
                      return(
                          <TableCell key={column+index}>{column}</TableCell>
                      )
                    })}
                  </TableRow>
                  </TableHead>
                    <TableBody>
                    {rows.map((row,index)=>{
                    return(<TableRow key={row+index}>
                        {
                        columns.map(column=>{
                            return <TableCell key={column+index}>{row[column]}</TableCell>
                        })
                        }
                        </TableRow>)
                    })}

                 </TableBody>
                 </Table>
             </div>
        )
    }
}