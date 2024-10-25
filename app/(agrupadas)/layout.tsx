
export const metadata = {
 title: 'SEO Title',
 description: 'SEO Title',
};
export default function GeneralLoyout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div>
        <p>Este es un p</p>
     {children}
    </div>
  );
}