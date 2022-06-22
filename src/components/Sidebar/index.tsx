import { gql, useQuery } from "@apollo/client";
import { Lesson } from "../Lesson";
const  GET_LESSON_QUERY = gql`
  query  {
  lessons(stage: PUBLISHED, orderBy: availableAt_ASC) {
    availableAt
    id
    lessonType
    title
    slug
  }
}
`

interface  GetLessionQueryResponse{
    lessons:{
        id:string
        title:string
        slug:string
        availableAt:string
        lessonType:'live'|'class'
    }[]
}


export  function Sidebar(){
    const {data} = useQuery<GetLessionQueryResponse >(GET_LESSON_QUERY)
    console.log(data)

    return(
        <div className="w-[348px] bg-gray-700  p-6  border-l  border-gray-600 h-screen"> 
             <span className="block pb-6 mb-6 text-2xl font-bold border-b border-gray-500">
                Cronogramas de Aulas
            </span>

            <div className="flex flex-col gap-8 ">
                {data?.lessons.map(lesson =>{
                    return(
                        <Lesson
                        key={lesson.id}
                        title={lesson.title}
                        slug={lesson.slug}
                        availbleAt={new Date(lesson.availableAt)}
                        type={lesson.lessonType}

                        
                        />
                    )
                })}
                


            </div>
        </div>
    )
}