export interface EditProps {
  showEditModal: boolean;
  setShowEditModal: (value: boolean) => void;
  targetId: number;
  content: string;
  title: string;
}

export interface DeleteProps {
  showDeleteModal: boolean;
  setShowDeleteModal: (value: boolean) => void;
  targetId: number;
}

export interface AllPropsProps {
  id: number;
  username: string;
  title: string;
  content: string;
  created_datetime: string;
}

export interface ContextProps {
  children: React.ReactNode;
}
