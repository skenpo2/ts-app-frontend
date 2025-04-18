import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import useCreateWorkspaceDialog from '@/hooks/use-create-workspace-dialog';
import CreateWorkspaceForm from './workspace/create-workspace-form';

export function DialogDemo() {
  const { open, onClose } = useCreateWorkspaceDialog();
  return (
    <Dialog modal={true} open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-5xl !p-0 overflow-hidden border-0">
        <CreateWorkspaceForm {...{ onClose }} />
      </DialogContent>
    </Dialog>
  );
}
