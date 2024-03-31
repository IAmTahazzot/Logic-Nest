import React from 'react'
import Workflow from './workflow'
import { onGetWorkflows } from '../_actions/workflow-connections'
import MoreCredits from './more-creadits'

type Props = {}

const Workflows = async (props: Props) => {
  const workflows = await onGetWorkflows()
  return (
    <div className='relative flex flex-col gap-4'>
      <section className='flex flex-col m-2'>
        <MoreCredits />
        {workflows?.length ? (
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6'>
            {workflows.map(flow => (
              <Workflow key={flow.id} {...flow} />
            ))}
          </div>
        ) : (
          <div className='mt-28 flex text-muted-foreground items-center justify-center'>
            No Workflows
          </div>
        )}
      </section>
    </div>
  )
}

export default Workflows
