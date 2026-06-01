const legacyAngular = {
    id: 'legacy-angular',
    title: 'Migração AngularJS → Angular',
    language: 'TypeScript',
    summary: 'Exemplo de componente e service Angular modernos substituindo lógica legada do AngularJS com tipagem e injeção de dependências.',
    files: [
        {
            name: 'orders.service.ts',
            language: 'typescript',
            code: `@Injectable({ providedIn: 'root' })
export class OrdersService {
  constructor(private http: HttpClient) {}

  getOrders(status?: string): Observable<Order[]> {
    const params = status ? new HttpParams().set('status', status) : undefined;
    return this.http.get<Order[]>('/api/orders', { params });
  }

  updateStatus(id: string, status: OrderStatus): Observable<Order> {
    return this.http.patch<Order>(\`/api/orders/\${id}\`, { status });
  }
}`
        },
        {
            name: 'orders-list.component.ts',
            language: 'typescript',
            code: `@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
})
export class OrdersListComponent implements OnInit {
  orders: Order[] = [];
  loading = true;

  constructor(private ordersService: OrdersService) {}

  ngOnInit(): void {
    this.ordersService.getOrders('pending').subscribe({
      next: (orders) => {
        this.orders = orders;
        this.loading = false;
      },
      error: () => (this.loading = false),
    });
  }

  markAsDone(order: Order): void {
    this.ordersService.updateStatus(order.id, 'done').subscribe();
  }
}`
        }
    ]
};

export default legacyAngular;
