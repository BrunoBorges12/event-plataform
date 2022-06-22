import { gql, useQuery } from '@apollo/client'
import { isPast,format } from 'date-fns'
import ptBR from 'date-fns/esm/locale/pt-BR/index.js'
import { CheckCircle,Lock  }  from 'phosphor-react'
interface LessonProps {
    title:string
    slug:string
    availbleAt:Date
    type:'live'|'class'

}




export  function Lesson(props:LessonProps){
    const availbleDateFormatted = format(props.availbleAt,"EEEE '•' d ' de ' MMMM ' • ' K'h'mm ",{
      locale:ptBR
    } )
    const isLessonAvalible = isPast(props.availbleAt);
    return(
       <a href="#" >
        <span className="text-gray-300 " >
        {availbleDateFormatted}        
                              
        </span>
        <div className="p-4 mt-2 border border-gray-500 rounded ">
        <header className="flex items-center justify-between up">
            {isLessonAvalible?(
            <span className="flex items-center gap-2 text-sm font-medium text-blue-500">
              <CheckCircle  size={20}/>
           Conteudo liberado
              </span>
            ):(
                <span className="flex items-center gap-2 text-sm font-medium text-orange-500">
                  <Lock  size={20}/>
                    Em Breve
                </span>
                )}
           
            <span className="px-2 text-xs rounded  py-[0.125rem] text-white border  border-green-300 font-bold">
              {props.type ==='live'? 'AO VIVO': 'Aula pratica'}
            </span>

        </header>
        <strong className="block mt-5 text-gray-200">
                {props.title}
        </strong>
        </div>
       </a>
    )
}