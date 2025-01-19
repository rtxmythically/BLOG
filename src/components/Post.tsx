import React, { Suspense, lazy } from 'react';
import { useParams } from 'react-router-dom';


const ErrorComponent = lazy(() => import('../data/tsx/Error'));


const loadComponent = (id: string) => {
  try {
    return lazy(() => import(`../data/tsx/${id}.tsx`));
  } catch  {
    return ErrorComponent;
  }
};

const Post: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  const DynamicComponent = id ? loadComponent(id) : ErrorComponent;

  return (
    <div className='Post'>
      <Suspense fallback={<div>Loading...</div>}>
        <DynamicComponent />
      </Suspense>
    </div>
  );
};

export default Post;
