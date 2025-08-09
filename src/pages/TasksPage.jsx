import { useNavigate, useSearchParams } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";

function TasksPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="h-screen w-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4 ">
        <div className="flex justify-center relative mb-6">
          <h1 className="text-3xl text-slate-100 font-bold text-center">
            Detalhes da Tarefa
          </h1>
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-0 bottom-0 text-slate-100"
          >
            <ChevronLeftIcon />
          </button>
        </div>

        <div className="bg-slate-400 p-4 rounded-md">
          <h2 className="text-xl text-slate-100 font-semibold">{title}</h2>
          <p className="text-slate-200">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TasksPage;
