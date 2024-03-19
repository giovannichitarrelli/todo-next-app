import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageHeaderNav,
  DashboardPageHeaderTitle,
  DashboardPageMain,
} from "@/components/dashboard/page";
import { TodoDataTable } from "./_components/todo-data-table";
import { Button } from "@/components/ui/button";
import { TodoUpsertSheet } from "../_components/todo-upersert-sheet";
import { PlusIcon } from "lucide-react";
import { getUserTodos } from "./actions";

export default async function AppPage() {
  const todos = await getUserTodos();
  return (
    <DashboardPage>
      <DashboardPageHeader>
        <DashboardPageHeaderTitle>Tarefas</DashboardPageHeaderTitle>

        <DashboardPageHeaderNav>
          <TodoUpsertSheet>
            <Button variant="outline" size="sm">
              <PlusIcon className=" w-4 h-4 mr-3" />
              Add todo
            </Button>
          </TodoUpsertSheet>
        </DashboardPageHeaderNav>
      </DashboardPageHeader>
      <DashboardPageMain>
        <TodoDataTable data={todos} />
      </DashboardPageMain>
    </DashboardPage>
  );
}
