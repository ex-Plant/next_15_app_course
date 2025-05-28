**client/server**
- you can wrap a server component with a  client component without making it a client component when you are not
  importing server one component into client component. When using children pattern we are actually doing just that>


'use client'
export const ClientWrapper = ({children}: {children: React.ReactNode}) => {
return (
<button onClick={() => alert('I am a client')}>
{children}
</button>
);
};
