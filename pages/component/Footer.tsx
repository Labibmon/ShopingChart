import React from 'react'

interface Props {
}
export const Footer: React.FC<Props> = ({}) => {
    return(
        <footer id="sticky-footer" className="py-4 bg-dark text-white-50">
    <div className="container text-center">
      <small>Copyright &copy; Labibmon</small>
    </div>
  </footer>
    )
}