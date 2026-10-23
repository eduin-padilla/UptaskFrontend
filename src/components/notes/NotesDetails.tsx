import { deleteNote } from "@/api/NoteApi"
import { useAuth } from "@/hooks/useAuth"
import type { Note } from "@/types"
import { formatDate } from "@/utilities/utilities"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useMemo } from "react"
import { useLocation, useParams } from "react-router-dom"
import { toast } from "react-toastify"

type NoteDetailProps = {
  note: Note
}

export default function NotesDetails({note}: NoteDetailProps) {

  const { data, isLoading} = useAuth()
  const canDelete = useMemo(() =>data?._id === note.createdBy._id, [data?._id, note.createdBy._id])
  const params = useParams()
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const queryClient = useQueryClient()

  const projectId = params.projectId!
  const taskId = queryParams.get('viewTask')!


  const {mutate} = useMutation({
      mutationFn: deleteNote,
      onError: (error) =>{
          toast.error(error.message)
      },
      onSuccess: (data) =>{
          toast.success(data)
          queryClient.invalidateQueries({queryKey: ['task', taskId]})
          
      }
  })

  if(isLoading) return 'cargando....'

  return (
    <div className="flex justify-between items-center p-3">

      <div >
        <p>{note.content} por: <span className="font-bold">{note.createdBy.name}</span></p>
        <p className="text-xs text-slate-500">
          {formatDate(note.createdAt)}
        </p>
      </div>
        {canDelete && (
          <button className="bg-red-400 hover:bg-red-500 p-2 text-xs text-white font-bold cursor-pointer transition-colors" type="button" onClick={() => mutate({projectId, taskId, noteId: note._id})}>Eliminar</button>
        )}
    </div>
    
  )
}
