import React from 'react';
import Tree from 'react-tree-graph';
import css from './Charts.css'

const charts = () => {
  let data = {
    name: 'Parent',
      children: [
        {
          name: 'Child One',
            children: [
              {
                name: 'Child One',
              }, 
              {
                name: 'Child Two'
              },
              {
                name: 'Child Three'
              },              
              {
                name: 'Child Four'
              },              
              {
                name: 'Child Five'
              },
              {
                name: 'Child Six'
              },              
              {
                name: 'Child Seven'
              },              
              {
                name: 'Child Eight'
              },
              {
                name: 'Child Nine'
              }
            ]
        }, 
        {
          name: 'Child Two',
           children: [
              {
                name: 'Child One',
              }, 
              {
                name: 'Child Two'
              },
              {
                name: 'Child Three'
              },              
              {
                name: 'Child Four'
              },              
              {
                name: 'Child Five'
              },
              {
                name: 'Child Six'
              },              
              {
                name: 'Child Seven'
              },              
              {
                name: 'Child Eight'
              },
              {
                name: 'Child Nine'
              }
            ]
        }
        , 
        {
          name: 'Child Three',
            children: [
              {
                name: 'Child One',
                children: [
                  {name: 'Chile one'}
                ]
              }, 
              {
                name: 'Child Two',
                children: [
                  {
                    name: 'Child One'
                  }
                ]
              },
              {
                name: 'Child Three',
                children: [
                  {
                    name: 'Child One'
                  }
                ]
              },              
              {
                name: 'Child Four',
                children: [
                  {
                    name: 'Child One'
                  }
                ]
              },              
              {
                name: 'Child Five'
              },
            ]
        },
        {
          name: 'Child Four',
          children: [
            {
              name: 'Child One',
              children: [
                {
                  name: 'Child One'
                },
                {
                  name: 'Child Two'
                },
                {
                  name: 'Child Three'
                },
                {
                  name: 'Child Four',
                  children: [
                    {
                      name: 'Child One'
                    },
                    {
                      name: 'Child two'
                    }
                  ]
                },
                {
                  name: 'Child Two'
                },
                {
                  name: 'Child Three'
                }
              ]
            }
          ]
        },
        {
          name: 'Child Five',
          children: [
            {
              name: 'Child One'
            }, 
            {
              name: 'Child Two',
              children: [
                {
                  name: 'Child One'
                }
              ]
            },
            {
              name: 'Child Three',
              children: [
                {
                  name: 'Child One'
                }, 
                {
                  name: 'Child Two',
                  children: [
                    {
                      name: 'Child One'
                    },
                    {
                      name: 'Child Two'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
};    
    return (
      <div className="custom-container">
          <Tree
              data={data}
              height={900}
              width={800}
              svgProps={{
                className: 'custom',
            }}/>
      </div>
    );
};

export default charts;